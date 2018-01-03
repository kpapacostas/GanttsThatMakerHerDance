class RenameEventsToTasks < ActiveRecord::Migration[5.1]
  def change
    rename_table :events, :tasks
  end
end
