class Car:
    costPerMile = 30
    def __init__(self, maxMove=500, maxMovePerTurn=10):
        self.maxMove = maxMove
        self.maxMovePerTurn = maxMovePerTurn
        self.distanceFromShed = 0
        self.distanceTravelled = 0
        
        
    def move(self, howFar):
        overshoot = 0
        if howFar > self.maxMovePerTurn:
            howFar = self.maxMovePerTurn
        elif howFar < -1*self.maxMovePerTurn:
            howFar = -1*self.maxMovePerTurn
        self.distanceFromShed += howFar
        self.distanceTravelled += abs(howFar)
        if self.distanceFromShed > self.maxMove:
            overshoot = self.distanceFromShed - self.maxMove
            self.distanceFromShed = self.maxMove
            self.distanceTravelled -= overshoot
        elif self.distanceFromShed < 0:
            overshoot = abs(self.distanceFromShed)
            self.distanceTravelled -= overshoot

    def getDistanceFromShed(self):
        return self.distanceFromShed

    def setDistanceFromShed(self, dist):
        if dist > self.maxMove:
            dist = self.maxMove
        elif dist < 0:
            dist = 0
        self.distanceFromShed = dist

class BondCar(Car):
    def __init__(self, maxMove=500, maxMovePerTurn=20, howManyMissiles=4):
        super().__init__(maxMove, maxMovePerTurn)
        self.howManyMissiles = howManyMissiles

    def launchMissile(self):
        if self.howManyMissiles > 0:
            print("Missile launched! Kerboom!")
            self.howManyMissiles -= 1
        else:
            print("You are out of missiles, 007.")

    def getHowManyMissiles(self):
        return self.howManyMissiles

class BeanCar(Car):
    def secureTeddy(self):
        print("Teddy now has a safety belt on.")

james1 = BondCar()
james1.move(20)
james1.move(20)
james1.move(20)

james1.launchMissile()
james1.launchMissile()
james1.launchMissile()
james1.launchMissile()
james1.launchMissile()

print(james1.getDistanceFromShed())



