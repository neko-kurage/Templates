/* imports */
/*
使用していないライブラリがあるとESlintに怒られるのでコメントアウトしてあります。
使用する際は外してください。
*/

//three.js
/*
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { TransformControls } from 'three/examples/jsm/controls/TransformControls';
*/

//anime.js
/*
import anime from "animejs/lib/anime.es.js";
*/

window.addEventListener("DOMContentLoaded", setup);

function setup() {
  console.log("Hi, this template file is loaded!!");
  console.log(add(5, 10));
}

function add(numA: number, numB: number) {
  return numA + numB;
}
