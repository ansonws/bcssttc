class CreateTournaments < ActiveRecord::Migration[5.2]
  def change
    create_table :tournaments do |t|
      t.string :edition
      t.integer :year

      t.timestamps
    end
  end
end
