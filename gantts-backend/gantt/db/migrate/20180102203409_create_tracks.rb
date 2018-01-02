class CreateTracks < ActiveRecord::Migration[5.1]
  def change
    create_table :tracks do |t|
      t.belongs_to :project, foreign_key: true
      t.integer :priority

      t.timestamps
    end
  end
end
