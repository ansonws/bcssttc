class CreateTournaments < ActiveRecord::Migration[5.2]
  def change
    create_table :tournaments do |t|
      t.string :edition
      t.date :date

      t.timestamps
    end
  end
end
