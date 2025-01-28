
function List(){
  const fruits = [{id: 1 , name: "apple", rating: 4}, {id: 2,name: "banana", rating: 8}, {id:3, name: "papaya", rating: 6}, {id: 4, name: "kiwi", rating: 8}, {id:5,name: "mango", rating: 7}]

  const filt = fruits.filter(fruit => fruit.rating < 7)

  const listItems = filt.map(fruit => <li key={fruit.name}>{fruit.name} : {fruit.rating}</li>) 



  return(
    <ul>{listItems}</ul> 
  );

}

export default List