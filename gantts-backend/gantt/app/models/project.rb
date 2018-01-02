class Project < ApplicationRecord
  has_many :tracks
  has_many :events, through: :tracks
end
