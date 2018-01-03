class TaskSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :start_time, :duration, :track_id
  belongs_to :track
end
