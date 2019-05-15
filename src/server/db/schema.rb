# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_05_15_010215) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "entries", force: :cascade do |t|
    t.bigint "player_id"
    t.bigint "event_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["event_id"], name: "index_entries_on_event_id"
    t.index ["player_id"], name: "index_entries_on_player_id"
  end

  create_table "events", force: :cascade do |t|
    t.string "gender"
    t.string "category"
    t.bigint "tournament_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["tournament_id"], name: "index_events_on_tournament_id"
  end

  create_table "matches", force: :cascade do |t|
    t.bigint "event_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["event_id"], name: "index_matches_on_event_id"
  end

  create_table "participations", force: :cascade do |t|
    t.bigint "player_id"
    t.bigint "match_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["match_id"], name: "index_participations_on_match_id"
    t.index ["player_id"], name: "index_participations_on_player_id"
  end

  create_table "players", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.integer "grade"
    t.integer "rating"
    t.bigint "school_id"
    t.bigint "team_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["school_id"], name: "index_players_on_school_id"
    t.index ["team_id"], name: "index_players_on_team_id"
  end

  create_table "schools", force: :cascade do |t|
    t.string "name"
    t.string "city"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "sponsors", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "position"
    t.string "email"
    t.bigint "phone_number"
    t.bigint "school_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["school_id"], name: "index_sponsors_on_school_id"
  end

  create_table "teams", force: :cascade do |t|
    t.string "gender"
    t.string "tier"
    t.bigint "school_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "event_id"
    t.index ["event_id"], name: "index_teams_on_event_id"
    t.index ["school_id"], name: "index_teams_on_school_id"
  end

  create_table "tournaments", force: :cascade do |t|
    t.integer "edition"
    t.date "date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "entries", "events"
  add_foreign_key "entries", "players"
  add_foreign_key "events", "tournaments"
  add_foreign_key "matches", "events"
  add_foreign_key "participations", "matches"
  add_foreign_key "participations", "players"
  add_foreign_key "players", "schools"
  add_foreign_key "players", "teams"
  add_foreign_key "sponsors", "schools"
  add_foreign_key "teams", "events"
  add_foreign_key "teams", "schools"
end
