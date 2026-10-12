class Tile {
  constructor(id, value, color) {
    this.id = id;
    this.value = value;
    this.color = color;
  }


  getTileInfo( ) {
    return {
        id: this.id,
        value: this.value,
        color: this.color
        };
    }   
}

export default Tile;




