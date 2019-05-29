class Entry < ApplicationRecord
  belongs_to :competitor, polymorphic: true
  
  belongs_to :event
  
  has_one :team

  validates :event_id, uniqueness: { scope: [:competitor_id, :competitor_type] }
end

# competitor_id: 2482 type:Tenure -> Rollback
# competitor_id: 2483, type:Tenure -> Rollback

# 2488
# 
