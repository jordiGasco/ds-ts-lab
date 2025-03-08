import {Friend, Colleague } from './myTypes'
import { friends, colleagues } from "./01-basics";

function older(f: Friend) : string {
    f.age += 1
    return `${f.name} is now ${f.age}` 
}

console.log(older(friends[0]))

function allOlder(friendsArray: Friend[]) : string[] {
    return friendsArray.map(friend => {
        friend.age += 1;
        return `${friend.name} is now ${friend.age}`;
    });
}

console.log(allOlder(friends))

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }
  console.log(highestExtension(colleagues.current));

  // add a new colleague to the current colleagues list
  function addColleague(current: Colleague[], name: string, department: string, email: string, extension: number): void {
    const newColleague: Colleague = {
        name,
        department,
        contact: {
            email,
            extension
        }
    };

    colleagues.current.push(newColleague);
}

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com",133);
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));


