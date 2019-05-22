class CreateEntries < ActiveRecord::Migration[5.2]
  def change
    create_table :entries do |t|
      t.references :event, foreign_key: true
      t.references :competitor, polymorphic: true, index: true
      t.timestamps
    end
  end
end
