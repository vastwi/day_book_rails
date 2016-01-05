class CreateBills < ActiveRecord::Migration
  def change
    create_table :bills do |t|
      t.integer :bill_no
      t.integer :bill_amount
      t.boolean :card
      t.integer :card_no

      t.timestamps null: false
    end
  end
end
