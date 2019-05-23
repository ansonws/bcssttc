class ChangeColumnTypeStringToInteger < ActiveRecord::Migration[5.2]
  def change
    change_column :tenures, :grade, :integer, using: 'grade::integer'
    change_column :tenures, :rating, :integer, using: 'rating::integer'
    change_column :tournaments, :edition, :integer, using: 'edition::integer'
  end
end
