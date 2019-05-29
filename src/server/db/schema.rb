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

ActiveRecord::Schema.define(version: 2019_05_29_193013) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "entries", force: :cascade do |t|
    t.bigint "event_id"
    t.string "competitor_type"
    t.bigint "competitor_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["competitor_type", "competitor_id"], name: "index_entries_on_competitor_type_and_competitor_id"
    t.index ["event_id"], name: "index_entries_on_event_id"
  end

  create_table "events", force: :cascade do |t|
    t.string "gender"
    t.string "category"
    t.bigint "tournament_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["tournament_id"], name: "index_events_on_tournament_id"
  end

  create_table "friendly_id_slugs", force: :cascade do |t|
    t.string "slug", null: false
    t.integer "sluggable_id", null: false
    t.string "sluggable_type", limit: 50
    t.string "scope"
    t.datetime "created_at"
    t.index ["slug", "sluggable_type", "scope"], name: "index_friendly_id_slugs_on_slug_and_sluggable_type_and_scope", unique: true
    t.index ["slug", "sluggable_type"], name: "index_friendly_id_slugs_on_slug_and_sluggable_type"
    t.index ["sluggable_type", "sluggable_id"], name: "index_friendly_id_slugs_on_sluggable_type_and_sluggable_id"
  end

  create_table "players", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "gender"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "schools", force: :cascade do |t|
    t.string "name"
    t.string "city"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "seasons", force: :cascade do |t|
    t.bigint "school_id"
    t.bigint "sponsor_id"
    t.bigint "tournament_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["school_id"], name: "index_seasons_on_school_id"
    t.index ["sponsor_id"], name: "index_seasons_on_sponsor_id"
    t.index ["tournament_id"], name: "index_seasons_on_tournament_id"
  end

  create_table "sponsors", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "position"
    t.string "email"
    t.bigint "phone_number"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "teams", force: :cascade do |t|
    t.string "gender"
    t.string "tier"
    t.bigint "season_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "entry_id"
    t.index ["entry_id"], name: "index_teams_on_entry_id"
    t.index ["season_id"], name: "index_teams_on_season_id"
  end

  create_table "tenures", force: :cascade do |t|
    t.integer "grade"
    t.integer "rating"
    t.bigint "season_id"
    t.bigint "team_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "player_id"
    t.index ["player_id"], name: "index_tenures_on_player_id"
    t.index ["season_id"], name: "index_tenures_on_season_id"
    t.index ["team_id"], name: "index_tenures_on_team_id"
  end

  create_table "tournaments", force: :cascade do |t|
    t.integer "edition"
    t.integer "year"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "slug"
    t.index ["slug"], name: "index_tournaments_on_slug", unique: true
  end

  add_foreign_key "entries", "events"
  add_foreign_key "events", "tournaments"
  add_foreign_key "seasons", "schools"
  add_foreign_key "seasons", "sponsors"
  add_foreign_key "seasons", "tournaments"
  add_foreign_key "teams", "entries"
  add_foreign_key "teams", "seasons"
  add_foreign_key "tenures", "players"
  add_foreign_key "tenures", "seasons"
  add_foreign_key "tenures", "teams"
end
