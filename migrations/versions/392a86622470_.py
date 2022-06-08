"""empty message

Revision ID: 392a86622470
Revises: 366526923ff1
Create Date: 2022-06-08 22:35:37.868782

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '392a86622470'
down_revision = '366526923ff1'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('school', 'logo',
               existing_type=sa.VARCHAR(length=120),
               type_=sa.String(length=500),
               existing_nullable=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('school', 'logo',
               existing_type=sa.String(length=500),
               type_=sa.VARCHAR(length=120),
               existing_nullable=False)
    # ### end Alembic commands ###
