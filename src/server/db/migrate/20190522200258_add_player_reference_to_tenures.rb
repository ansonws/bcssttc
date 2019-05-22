class AddPlayerReferenceToTenures < ActiveRecord::Migration[5.2]
  def change
    add_reference :tenures, :player, foreign_key: true
  end
end
