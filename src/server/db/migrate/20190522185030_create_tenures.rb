class CreateTenures < ActiveRecord::Migration[5.2]
  def change
    create_table :tenures do |t|
      t.string :grade
      t.string :rating
      t.references :season, foreign_key: true
      t.references :team, foreign_key: true

      t.timestamps
    end
  end
end
