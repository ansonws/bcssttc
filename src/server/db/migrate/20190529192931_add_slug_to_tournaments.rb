class AddSlugToTournaments < ActiveRecord::Migration[5.2]
  def change
    add_column :tournaments, :slug, :string
    add_index :tournaments, :slug, unique: true
  end
end
