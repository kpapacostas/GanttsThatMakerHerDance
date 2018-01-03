class ChangeStartTimeAndDurationToFloat < ActiveRecord::Migration[5.1]
  def change
    change_column :tasks, :start_time, :float
    change_column :tasks, :duration, :float
  end
end
