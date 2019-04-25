import { from, EMPTY } from 'rxjs';
import { map, filter, switchMap, catchError } from 'rxjs/operators';

const source = from([
  {
    name: 'Joe', age: 30, dead: true, children: [
      { name: 'Hannah', age: 4, children: [] },
      { name: 'Jonathan', age: 8, children: [] }
    ]
  },
  {
    name: 'Frank', age: 20, dead: false, children: [
      { name: 'James', age: 1, children: [] },
      { name: 'Molly', age: 2, children: [] }
    ]
  },
  {
    name: 'Ryan', age: 50, dead: true, children: [
      {
        name: 'Paul', age: 30, children: [
          { name: 'Sally', age: 2, children: [] }
        ]
      },
      { name: 'Peter', age: 25, children: [] },
      { name: 'Sebastian', age: 17, children: [] }
    ]
  }
]);
/* const home = source
  .pipe(
    filter(person => person.dead == false),
    map(person => person.children),
    map(children => children.filter(child => child.age <= 18)),
    switchMap(children => children.map(({name})=> name)))
   .subscribe(data => console.log(data + " is living with parents"));
const onOwn = source
  .pipe(
    filter(person => person.dead == false || true),
    map(person => person.children),
    map(children => children.filter(child => child.age >= 18)),
    switchMap(children => children.map(({name})=> name)))
   .subscribe(data => console.log(data + " is living own their own"));
const orphanage = source
  .pipe(
    filter(person => person.dead == true),
    map(person => person.children),
    map(children => children.filter(child => child.age <= 18)),
    switchMap(children => children.map(({name})=> name)
    ))
    
   .subscribe(data => console.log(data + " is living in a orphanage"));
 */
const childchild = source
  .pipe(
    map(person => person.children.filter(child => child.children.length > 0)),
    map(children => children.map(child => child.children.map(({ name }) => name)))
  )
  .subscribe(data => console.log(data + " is living in a orphanage"));