class AddHostToTournaments < ActiveRecord::Migration[5.2]
  def change
    add_column :tournaments, :host, :string
  end
end
