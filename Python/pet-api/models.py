from flask_sqlalchemy import sQLAlchemy

class Pet(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    species = db.Column(db.String(50), nullable=False)
    age = db.Column(db.Integer)
    adopted = db.Column(db.Boolean, default=False, nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'species': self.species,
            'age': self.age,
            'adopted': self.adopted
        }

        def __repr__(self):
            return f'<pet {self.id}: {self.name} ({self.species})>'