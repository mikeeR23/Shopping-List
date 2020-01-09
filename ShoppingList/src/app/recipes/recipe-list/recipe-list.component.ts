import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Spaghetti', 'this is a test', 'https://cdn.pixabay.com/photo/2016/08/19/09/24/spaghetti-1604836_960_720.jpg'), 
    new Recipe('Spaghetti', 'this is a test', 'https://cdn.pixabay.com/photo/2016/08/19/09/24/spaghetti-1604836_960_720.jpg')

  ];

  constructor() { }

  ngOnInit() {
  }

}
