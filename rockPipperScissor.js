const shape = ["rock", "papper", "scissor"];
const Comp = shape[Math.floor(Math.random() * shape.length)];
console.log(Comp);

function hand(choice) {
  if (choice === "rock" && Comp === "scissor") {
    return "you win";
  } else if (choice === "rock" && Comp === "papper") {
    return "you lose";
  } else if (choice === "rock" && Comp === "rock") {
    return "tie";
  }

  if (choice === "papper" && Comp === "rock") {
    return "you win";
  } else if (choice === "papper" && Comp === "scissor") {
    return "you lose";
  } else if (choice === "papper" && Comp === "papper") {
    return "tie";
  }

  if (choice === "scissor" && Comp === "papper") {
    return "you win";
  } else if (choice === "scissor" && Comp === "rock") {
    return "you lose";
  } else if (choice === "scissor" && Comp === "scissor") {
    return "tie";
  }

  if (typeof choice === "string") {
    return `${choice} is not part of the game!`;
  } else {
    return "please input rock, papper, or scissors only!!";
  }
}
console.log(hand("scissor"));
