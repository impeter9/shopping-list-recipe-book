import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.eatwell101.com/wp-content/uploads/2019/08/tuscan-salmon-recipe.jpg'),
    new Recipe('A Test Recipe2', 'This is simply a test2', 'https://www.eatwell101.com/wp-content/uploads/2019/08/tuscan-salmon-recipe.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
