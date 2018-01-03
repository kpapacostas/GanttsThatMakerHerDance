class ChangeStartTimeAndDurationToFloat < ActiveRecord::Migration[5.1]
  def change
    change_column :task, :start_time, :float
    change_column :task, :duration, :float
  end
end
