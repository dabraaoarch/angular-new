import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  submitted = false;
  myHero?: Hero;
  model: Hero = new Hero(0,'','','');

  constructor(
  	private heroService: HeroService,
	private messageService: MessageService
  ) { }

  onSubmit(heroForm: NgForm){ 
	  if (heroForm.valid){
		  this.submitted = true;
		  console.log(heroForm.value);
		  this.myHero = heroForm.value;
		  this.heroService.addHero(this.myHero as Hero).subscribe(hero => { 
			  this.myHero = hero; 
			  this.model = hero;
		  });
	  }
  } 

  ngOnInit(): void {
  }


}
