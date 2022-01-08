import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		const heroes = [
			{ id: 11, name: 'Dr Nice', power: 'Be gentle', alterEgo: 'Alberto'},
			{ id: 12, name: 'Narco', power: 'Be funny', alterEgo: 'Mark' },
			{ id: 13, name: 'Bombasto', power: 'To explode', alterEgo: 'John' },
			{ id: 14, name: 'Celeritas', power: 'Fast as light', alterEgo: 'Malu' },
			{ id: 15, name: 'Magneta', power: 'Atract metal', alterEgo: 'Berenice' },
			{ id: 16, name: 'RubberMan', power: 'Very flexible', alterEgo: 'Eduardo' },
			{ id: 17, name: 'Dynama', power: 'Thunder power', alterEgo: 'Robert' },
			{ id: 18, name: 'Dr IQ', power: 'Smart girl', alterEgo: 'Leticia' },
			{ id: 19, name: 'Magma', power: 'As hot as the sun surface', alterEgo: 'Janis' },
			{ id: 20, name: 'Tornado', power: 'Weather control', alterEgo: 'Jonas' }
		];
		return {heroes};
	}

	genId(heroes: Hero[]): number {
		return heroes.length > 0 ? 
			Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
	}


}
