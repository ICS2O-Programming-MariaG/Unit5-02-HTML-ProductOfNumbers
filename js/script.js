// Copyright (c) 2022 Maria Goemans All rights reserved
//
// Created by: Maria G
// Created on: May 19, 2022
// This file contains the JS functions for index.html

"use strict"

function integersSent() {
  //initializing the sum variable
  let sum = 0;

  //getting the user's two inputted numbers
  let firstNum = parseInt(document.getElementById("first-number").value);
  let secondNum = parseInt(document.getElementById("second-number").value);

  //using a for loop to repeatedly add the first number to the sum, finding the product through addition
  for (let counter = 1; counter <= secondNum; counter++) {
    sum = sum + firstNum;
  }
  //displaying the sum/product to the screen
  document.getElementById("results").innerHTML = "The product of the two numbers is " + sum;
}
