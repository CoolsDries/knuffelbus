import { Injectable } from '@angular/core';
import { Animal } from '../animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private animals: Animal[] = [
    {
      name: 'Kleine Hond 1',
      age: 2,
      description: 'Een kleine hond vol energie en altijd klaar voor knuffels!',
      image: '/real_images/hond_klein.png'
    },
    {
      name: 'Kip 2',
      age: 1,
      description: 'Een nieuwsgierige kip die graag in de tuin rondscharrelt. Ze is lief en makkelijk te benaderen.',
      image: '/real_images/kip.png'
    },
    {
      name: 'Cavia 3',
      age: 1,
      description: 'Een zachte, knuffelbare cavia die graag op schoot zit en rustig knaagt.',
      image: '/real_images/cavia.png'
    },
    {
      name: 'Konijn 4',
      age: 2,
      description: 'Een schattig konijn dat graag rondhuppelt en knuffels waardeert.',
      image: '/real_images/konijn.png'
    },
    {
      name: 'Kat 5',
      age: 3,
      description: 'Een lieve, nieuwsgierige kat die houdt van aandacht en zachte aaien.',
      image: '/real_images/kat.png'
    },
    {
      name: 'Grote Hond 6',
      age: 5,
      description: 'Een grote, trouwe hond die zowel knuffelbaar als beschermend is.',
      image: '/real_images/hond_groot.png'
    }
  ];

  getAnimals(): Animal[] {
    return this.animals;
  }
}
