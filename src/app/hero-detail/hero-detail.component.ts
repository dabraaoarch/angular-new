import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?: Hero;
  powers = ['Really smart', 'Fast as light', 'Flexibility', 'Strong as steel'];

  constructor(
	  private heroService: HeroService, 
	  private route: ActivatedRoute,
  	  private location: Location
  	) { }

  ngOnInit(): void {
	  this.getHero();
  }

  getHero(): void{
	  const id = Number(this.route.snapshot.paramMap.get('id'));
	  this.heroService.getHero(id)
	  	.subscribe(hero => this.hero = hero);
  }

  goBack(): void{
	this.location.back();
  }

  onSubmit(heroForm: NgForm){
	if (heroForm.valid){
		//this.hero = heroForm.value;
		//console.log(heroForm.value
		this.heroService.updateHero(this.hero as Hero).subscribe(() => this.goBack());
	}
  }
  
}
