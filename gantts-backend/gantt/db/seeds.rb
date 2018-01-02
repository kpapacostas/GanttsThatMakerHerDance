# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Project.destroy_all
Track.destroy_all
Event.destroy_all

do_makeup = Project.create(name: "Kat's morning")
track = Track.create(priority: 1, project: do_makeup)
apply_eyeshadow = Event.create(title: "do eyes", content: "don't look like a whore", start_time: 0, duration: 100, track: track)
apply_foundation = Event.create(title: "foundation", content: "something something blemishes", start_time: 100, duration: 100, track: track)
