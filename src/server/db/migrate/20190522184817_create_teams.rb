class CreateTeams < ActiveRecord::Migration[5.2]
  def change
    create_table :teams do |t|
      t.string :gender
      t.string :tier
      t.references :season, foreign_key: true

      t.timestamps
    end
  end
end
