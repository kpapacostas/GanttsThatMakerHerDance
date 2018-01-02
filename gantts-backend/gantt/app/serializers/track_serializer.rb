class TrackSerializer < ActiveModel::Serializer
  attributes :id, :priority
  belongs_to :project
  has_many :events
end
