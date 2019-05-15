class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :gender
      t.string :category
      t.references :tournament, foreign_key: true

      t.timestamps
    end
  end
end
