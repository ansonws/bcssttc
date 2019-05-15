class CreateSponsors < ActiveRecord::Migration[5.2]
  def change
    create_table :sponsors do |t|
      t.string :first_name
      t.string :last_name
      t.string :position
      t.string :email
      t.bigint :phone_number
      t.references :school, foreign_key: true

      t.timestamps
    end
  end
end
