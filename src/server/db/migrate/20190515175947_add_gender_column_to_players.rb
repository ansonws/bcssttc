class AddGenderColumnToPlayers < ActiveRecord::Migration[5.2]
  def change
    add_column :players, :gender, :string
  end
end
