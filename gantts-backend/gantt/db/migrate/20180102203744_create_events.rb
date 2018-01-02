class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.belongs_to :track, foreign_key: true
      t.string :title
      t.string :content
      t.integer :start_time
      t.integer :duration

      t.timestamps
    end
  end
end
