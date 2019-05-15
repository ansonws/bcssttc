class CreatePlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :players do |t|
      t.string :first_name
      t.string :last_name
      t.integer :grade
      t.integer :rating
      t.references :school, foreign_key: true
      t.references :team, foreign_key: true

      t.timestamps
    end
  end
end
