class CreateTournaments < ActiveRecord::Migration[5.2]
  def change
    create_table :tournaments do |t|
      t.integer :edition
      t.date :date

      t.timestamps
    end
  end
end
