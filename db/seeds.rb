# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

benches = Bench.create([
    {description: 'A pretty nice bench',
    lat: 37.761340,
    lng: -122.431015},
    {description: 'A hospital bench',
    lat: 37.767276,
    lng: -122.434048},
    {description: 'Triangle bench',
    lat: 37.768361,
    lng: -122.430786},
    {description: 'Bench on Oakwood St',
    lat: 37.760863,
    lng: -122.424693},
    {description: 'Hayes Valley bench',
    lat: 37.775134,
    lng: -122.424961},
    {description: 'Mark Zuckerberg bench',
    lat: 37.756957,
    lng: -122.409617},
])