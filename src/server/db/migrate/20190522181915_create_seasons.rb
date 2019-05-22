class CreateSeasons < ActiveRecord::Migration[5.2]
  def change
    create_table :seasons do |t|
      t.references :school, foreign_key: true
      t.references :sponsor, foreign_key: true
      t.references :tournament, foreign_key: true

      t.timestamps
    end
  end
end
