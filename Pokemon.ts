/**
 * Created by mattpowell on 6/22/16.
 */

import {Pokemon, PokemonTrainer} from 'pokemon-ts/main';

export function exportTrainer() {
    var pansyPuff = new Pokemon('PansyPuff', 'Matt', 0);
    var doorMat = new Pokemon('DoorMat', 'Matt', 0);
    var youDie = new Pokemon('YouDie', 'Matt', 100);
    var myPokes = [pansyPuff, doorMat, youDie];
    
    var matt = new MattPokemonTrainer('Matt', 3, myPokes);
}

class 

class MattPokemonTrainer implements PokemonTrainer {
    name: string; 
    numberOfPokeballs: number;
    pokemon: Array<Pokemon>;
    gymBadges: string[];

    attack(pokemon: Pokemon, attackName: string): string {
        return pokemon.attack(attackName);
    }

    runAway(): string {
        return "Peace out!";
    }
    
    healPokemon(pokemon: Pokemon) {
        pokemon.heal();
    }
    
    constructor (name: string, pokeballs: number, pokemon: Array<Pokemon>) {
        this.name = name;
        this.numberOfPokeballs = pokeballs;
        this.pokemon = pokemon;
    }
}

class Pokemon {
    name: string;
    trainerName: string;
    hp: number;
    private attacks: Array<string>;

    get attack():Array<string> {
        return this.attacks;
    }

    set attacks(attacks: Array<string>) {
        this.attacks = attacks;
    }

    attack(attackName: string): string {
        return attackName;
    }
}


