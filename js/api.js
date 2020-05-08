export class API {
    constructor(artista, cancion){
        this.artista = artista;
        this.cancion = cancion;
    }

    async consultarApi(){
        const url = fetch(`https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`);

    
        const response = await (await url).json()
        return {
            response
        }
    }
}