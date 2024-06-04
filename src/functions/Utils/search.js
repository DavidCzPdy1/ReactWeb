
import http from "./http";

const save = async () => {
  let data = await http.get(`findFarm`, {params: {}}).then(n => n.data)
  if (data.success) {
    localStorage.setItem("data", JSON.stringify(data))
  }
  return data;
}


const filterData = (data, query) => {
  let isEqual = ["type", "name", "id"]
  for (let key of isEqual) {
    if (query[key]) data = data.filter(n => n[key] === query[key])
  }

  let isPresent = ["version", "structure", "special"]
  for (let key of isPresent) {
    if (query[key]) data = data.filter(n => n[key].includes(query[key]))
  }

  if (query.item) data.filter(n => n.items.find(i => i.name == query.item))

  return data
}


const searchInput = (event) => {
  let parms = ["type", "name", "id", "version", "structure", "special", "item"]

  let suggestions = document.getElementById('search-suggestions')
  let input = event.target.value.toLowerCase()
  if (input.length == 0) {
    suggestions.style.display = 'none'
    suggestions.innerHTML = ""
    return
  }

  let database = JSON.parse(localStorage.getItem('data') || {});
  if (!database.success) return save()

  let possibleFarms = database.data.filter(farm => farm.name.toLowerCase().includes(input) || farm.id.includes(input))
  let possibleItems = database.data.filter(farm => farm.items.filter(item => item.name.includes(input)).length)

  let namesList = [];
  for (let farm of possibleFarms) {
    namesList.push(farm.name)
  }


  for (let farm of possibleItems) {
    for (let item of farm.items.filter(it => it.name.includes(input))) {
      if (!namesList.includes(item.name)) {
        namesList.push(item.name)
      }
    }
  }

  if (!namesList.length) return

  namesList = namesList.sort(a => a.startsWith(input.toLowerCase()) ? -1 : 1)

  let starts = namesList.filter(n => n.startsWith(input.toLowerCase()));
  if (starts.length && event.nativeEvent.inputType == 'insertText') {
    let before = event.target.value.length
    event.target.value = starts[0]
    event.target.setSelectionRange(before, event.target.value.length)
  } else event.target.value = event.target.value.toLowerCase()


  suggestions.style.display = 'flex'
  suggestions.innerHTML = ""

  let list = document.createElement("ul");

  for (let name of namesList) {
    let entity = document.createElement("li");
    entity.innerHTML = name
    list.appendChild(entity)
  }
  suggestions.appendChild(list)

  suggestions.addEventListener('click', (e) => {
    event.target.value = e.target.innerText
    suggestions.style.display = 'none'
  })

}

const searchSubmit = async (event) => {
  if (event.key !== 'Enter') return

  let database = JSON.parse(localStorage.getItem('data') || {});
  if (!database.success) database = await save()

  let input = event.target.value.toLowerCase()
  let possibleFarms = database.data?.filter(farm => farm.name.toLowerCase().includes(input) || farm.id.includes(input)) || []
  let possibleItems = database.data?.filter(farm => farm.items.filter(item => item.name.includes(input)).length) || []

  console.log(`${possibleFarms.length} farms, ${possibleItems.length} items`)


  let suggestions = document.getElementById('search-suggestions')
  suggestions.style.display = 'none'
  suggestions.innerHTML = ""
  event.target.value = "";
  event.target.blur()
}


export { filterData, searchInput, save, searchSubmit }