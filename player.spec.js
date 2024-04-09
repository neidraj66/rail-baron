const Player = require('./player.js')

describe('Player', () => {
    it('should start the game with $20,000 cash', () => {
        // Arrange
        const newPlayer = new Player();

        // Act
        newPlayer.start();

        // Assert
        expect(newPlayer.cash).toEqual(20000);
    });
});