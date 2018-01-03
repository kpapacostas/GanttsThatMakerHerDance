class TaskSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :start_time, :duration
  belongs_to :track
end
