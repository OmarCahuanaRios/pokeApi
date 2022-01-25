package com.example.pokeapi.controller;

import com.example.pokeapi.model.Pokemon;
import com.example.pokeapi.services.PokemonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.List;
@CrossOrigin(origins="https://localhost:4200/",maxAge = 3600)
@RestController
@RequestMapping("/")
public class PokemonController {
    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    PokemonService service;

    final String Url="https://pokeapi.co/api/v2/pokemon-species";



    @GetMapping("/hola")
    public String hola(){
        return "funciona";
    }

    @GetMapping("/pokemones")
    public Object listarPokemones(){


        Object pokemones=restTemplate.getForObject(Url,Object.class);





        return pokemones;
    }

    @GetMapping(path={"/pokemones/{nombre}"})
    public Object buscarPokemon(@PathVariable("nombre") String nombre){

         String Url2=Url+"/"+nombre;
         System.out.println(Url2);
         Object pokemonEncontrado=restTemplate.getForObject(Url2,Object.class);
        System.out.println(pokemonEncontrado.toString());
         return pokemonEncontrado;
    }





}
