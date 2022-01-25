package com.example.pokeapi.services;

import com.example.pokeapi.model.Pokemon;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;
@Service
public class PokemonService {
    private static final String Url="https://pokeapi.co/api/v2/pokemon-species";
    @Autowired
    RestTemplate restTemplate;
    public List<ResponseEntity<Pokemon[]>> listarPokemones(){
        ResponseEntity<Pokemon[]> response=restTemplate.getForEntity(Url,Pokemon[].class);
        //Pokemon[] pokemones=response.getBody();
        List<ResponseEntity<Pokemon[]>> p= Arrays.asList(response);
        return p;
    }
}
